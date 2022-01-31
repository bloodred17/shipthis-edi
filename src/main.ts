import { renderInterchangeMessage } from './edi-serializer';
import {
  actualArrivalDateSegment,
  estimatedDateOfArrivalSegment, houseWaybillDateSegment,
  presentationDateOfGoodsDeclarationSegment, transportDocumentDateSegment,
} from './segments/dtm.segment';
import { containerInformationSegment } from './segments/eqd.segment';
import { lineItemSegment } from './segments/ftx.segment';
import { customsValuationMethodSegment, dutyTaxSegment, refundAcknowledgementIndicator } from './segments/gis.segment';
import {
  countryOfExplorationDespatchSegment,
  customsOfficeOfDestinationSegment,
  customsOfficeOfDestinationTransitSegment,
  locationOfGoodsSegment, placeOfLodgementOfDocumentsSegment, placePortOfLoadingSegment,
  warehouseSegment,
} from './segments/loc.segment';
import { beginningOfMessageSegment } from './segments/bgm.segment';
import { customsStatusOfGoodsSegment } from './segments/cst.segment';
import { interchangeHeaderSegment } from './segments/interchange-header.segment';
import { totalGrossWeightSegment } from './segments/mea.segment';
import { messageHeaderSegment } from './segments/message-header.segment';
import { numberOfPackagesSegment } from './segments/pac.segment';
import { marksAndNumbersSegment } from './segments/pci.segment';
import {
  deferredPaymentReferenceSegment,
  houseBillOfLadingNumberSegment,
  originalMrnSegment,
  previousProcedureMrnSegment,
  transportDocumentNumberSegment, uniqueConsignmentNumberSegment,
} from './segments/rff.segment';


(async () => {
  const interchangeHeaderData = {
    syntax_identifier: 'UNOB',
    syntax_version_number: '4',
    interchange_sender_identification: '12345678ABC',
    interchange_code_qualifier: '',
    interchange_sender_internal_identification: 'ABCDEFGHIJKLMNOP',
    interchange_sender_internal_sub_identification: 'SPCAS2',
    interchange_recipient_identification: 'SARSDEC',
    date_of_preparation: '20190501',
    time_of_preparation: '1327',
    interchange_control_reference: '1234567890',
    recipient_reference_password: '',
    application_reference: 'CUSDEC',
    processing_priority_code: '',
    acknowledgement_request: '1',
    interchange_agreement_identifier: '',
    test_indicator: '1'
  }

  const messageHeaderData = {
    message_reference_number: '00000000155033',
    message_type_identifier: 'CUSDEC',
    message_type_version_number: 'D',
    message_type_release_number: '96B',
    controlling_agency: 'UN',
    association_assigned_code: 'ZZZ01',
  };

  const beginningOfMessageData = {
    document_message_name_coded: '929',
    code_list_qualifier: '',
    code_list_responsible_agency: '',
    document_message_name: 'RCD',
    document_message_number: '12345678ABC20190228654321',
    version: '012345',
    revision_number: '00001',
    message_function_coded: '9'
  };

  const customsStatusOfGoodsData = {
    goods_items_number: '',
    customs_code_identification: 'A',
    code_list_qualifier: '117',
    code_list_responsible_agency_coded: 'ZZZ'
  };

  const locationOfGoodsData = {
    place_location_qualifier: '14',
    place_location_identifier: 'K6',
    code_list_qualifier: '',
    code_list_responsible_agency_coded: 'ZZZ',
    place_location: 'K'
  };

  const warehouseData = {
    place_location_qualifier: '18',
    place_location_identification: 'ABC0112345',
    code_list_qualifier: '',
    code_list_responsible_agency: 'ZZZ'
  };

  const customOfficeOfDestinationData = {
    place_location_qualifier: '122',
    place_location_identification: 'BCD0254321',
    code_list_qualifier: '',
    code_list_responsible_agency: 'ZZZ',
  };

  const customsOfficeOfDestinationTransitData = {
    place_location_qualifier: '45',
    place_location_identification: 'ABC',
    code_list_qualifier: '',
    code_list_responsible_agency: 'ZZZ',
  };

  const countryOfExplorationDespatchData = {
    place_location_qualifier: '35',
    place_location_identification: 'GB',
    code_list_qualifier: '',
    code_list_responsible_agency: '5',
  };

  const placeOfLodgementOfDocumentsData = {
    place_location_qualifier: '96',
    place_location_identification: 'JSA',
    code_list_qualifier: '',
    code_list_responsible_agency: 'ZZZ',
  };

  const placePortOfLoadingData = {
    place_location_qualifier: '9',
    place_location_identification: 'LHR',
    code_list_qualifier: '',
    code_list_responsible_agency: '5',
  };

  const presentationDateOfGoodsDeclarationData = {
    date_time_period_qualifier: '141',
    date_time_period: '20190228',
    date_time_period_format_qualifier: '102',
  };

  const estimatedDateOfArrivalData = {
    date_time_period_qualifier: '132',
    date_time_period: '20190228',
    date_time_period_format_qualifier: '102',
  };

  const actualArrivalDateData = {
    date_time_period_qualifier: '178',
    date_time_period: '20190228',
    date_time_period_format_qualifier: '102',
  };

  const customsValuationMethodData = {
    processing_indicator_coded: 'N',
    code_list_qualifier: '127',
    code_list_responsible_agency: 'ZZZ'
  };

  const dutyTaxData = {
    processing_indicator_coded: 'C',
    code_list_qualifier: '134',
    code_list_responsible_agency: 'ZZZ'
  };

  const refundAcknowledgementIndicatorData = {
    processing_indicator_coded: 'Y',
    code_list_qualifier: '109',
    code_list_responsible_agency: 'ZZZ'
  };

  const totalGrossWeightData = {
    measurement_application_qualifier: 'AAE',
    measurement_dimension: 'AAD',
    measure_unit_qualifier: 'KGM',
    measurement_value: '10.00'
  };

  const containerInformationData = {
    equipment_qualifier: 'CN',
    equipment_identification_number: 'ABCD1234567',
    equipment_size_and_type_identification: '',
    code_list_qualifier: '',
    code_list_responsible_agency: '',
    equipment_size_and_type: 'Seal-0001 Seal-0002',
    equipment_supplier: '',
    equipment_status: '',
    full_empty_indicator: '4'
  };

  const lineItemData = {
    text_subject_qualifier: 'LIN',
    text_function: '',
    free_text_identification: '',
    total_lines: '0001',
    credit_terms: '',
    vat_indicator: '',
    transaction_bank_code: '',
    change_acknowledgement_indicator: 'Y'
  };

  const houseBillOfLadingNumberData = {
    reference_qualifier: 'BH',
    reference_number: '12345678ABC87654321'
  };

  const houseWaybillDateData = {
    date_time_period_qualifier: '137',
    date_time_period: '20190228',
    date_time_period_format_qualifier: '102'
  };

  const originalMrnData = {
    reference_qualifier: 'ABT',
    reference_number: 'ABC201902285000001'
  };

  const previousProcedureMrnData = {
    reference_qualifier: 'IB',
    reference_number: 'ABC201901015000001'
  };

  const transportDocumentNumberData = {
    reference_qualifier: 'AAS',
    reference_number: 'VACMCCC1234567890'
  };

  const transportDocumentDateData = {
    date_time_period_qualifier: '137',
    date_time_period: '20190228',
    date_time_period_format_qualifier: '102'
  };

  const numberOfPackagesData = {
    number_of_packages: '3'
  };

  const marksAndNumbersData = {
    marking_instructions: '1',
    mn_1: 'Marks and Numbers - 1',
    mn_2: 'Marks and Numbers - 2',
    mn_3: 'Marks and Numbers - 3',
    mn_4: 'Marks and Numbers - 4',
    mn_5: 'Marks and Numbers - 5',
    mn_6: 'Marks and Numbers - 6',
    mn_7: 'Marks and Numbers - 7',
    mn_8: 'Marks and Numbers - 8',
    mn_9: 'Marks and Numbers - 9',
    mn_10: 'Marks and Numbers - 10',
  };

  const deferredPaymentReferenceData = {
    reference_qualifier: 'ABI',
    reference_number: '8127654321'
  };

  const uniqueConsignmentNumberData = {
    reference_qualifier: 'UCN',
    reference_number: '12345678A0000000001'
  };

  await renderInterchangeMessage([
    { segment: interchangeHeaderSegment, data: interchangeHeaderData },
    { segment: messageHeaderSegment, data: messageHeaderData },
    { segment: beginningOfMessageSegment, data: beginningOfMessageData },
    { segment: customsStatusOfGoodsSegment, data: customsStatusOfGoodsData },
    { segment: locationOfGoodsSegment, data: locationOfGoodsData },
    { segment: warehouseSegment, data: warehouseData },
    { segment: customsOfficeOfDestinationSegment, data: customOfficeOfDestinationData },
    { segment: customsOfficeOfDestinationTransitSegment, data: customsOfficeOfDestinationTransitData },
    { segment: countryOfExplorationDespatchSegment, data: countryOfExplorationDespatchData },
    { segment: placeOfLodgementOfDocumentsSegment, data: placeOfLodgementOfDocumentsData },
    { segment: placePortOfLoadingSegment, data: placePortOfLoadingData },
    { segment: presentationDateOfGoodsDeclarationSegment, data: presentationDateOfGoodsDeclarationData },
    { segment: estimatedDateOfArrivalSegment, data: presentationDateOfGoodsDeclarationData },
    { segment: estimatedDateOfArrivalSegment, data: estimatedDateOfArrivalData },
    { segment: actualArrivalDateSegment, data: actualArrivalDateData },
    { segment: customsValuationMethodSegment, data: customsValuationMethodData },
    { segment: dutyTaxSegment, data: dutyTaxData },
    { segment: refundAcknowledgementIndicator, data: refundAcknowledgementIndicatorData },
    { segment: totalGrossWeightSegment, data: totalGrossWeightData },
    { segment: containerInformationSegment, data: containerInformationData },
    { segment: lineItemSegment, data: lineItemData },
    { segment: houseBillOfLadingNumberSegment, data: houseBillOfLadingNumberData },
    { segment: houseWaybillDateSegment, data: houseWaybillDateData },
    { segment: originalMrnSegment, data: originalMrnData },
    { segment: previousProcedureMrnSegment, data: previousProcedureMrnData },
    { segment: transportDocumentNumberSegment, data: transportDocumentNumberData },
    { segment: transportDocumentDateSegment, data: transportDocumentDateData },
    { segment: numberOfPackagesSegment, data: numberOfPackagesData },
    { segment: marksAndNumbersSegment, data: marksAndNumbersData },
    { segment: deferredPaymentReferenceSegment, data: deferredPaymentReferenceData },
    { segment: uniqueConsignmentNumberSegment, data: uniqueConsignmentNumberData },
  ]);

})()
