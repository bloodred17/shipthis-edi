import { renderInterchangeMessage } from './edi-serializer';
import { commercialInvoiceSegment } from './segments/doc.segment';
import {
  actualArrivalDateSegment,
  estimatedDateOfArrivalSegment, houseWaybillDateSegment, invoiceDateSegment,
  presentationDateOfGoodsDeclarationSegment, transportDocumentDateSegment,
} from './segments/dtm.segment';
import { containerInformationSegment } from './segments/eqd.segment';
import {
  additionalInformationSg30Segment,
  customsClearanceInstructionsSegment,
  goodsDescriptionSegment,
  lineItemSegment,
} from './segments/ftx.segment';
import { customsValuationMethodSegment, dutyTaxSegment, refundAcknowledgementIndicator } from './segments/gis.segment';
import {
  countryOfExplorationDespatchSegment, countryOfOriginSegment,
  customsOfficeOfDestinationSegment,
  customsOfficeOfDestinationTransitSegment,
  locationOfGoodsSegment, placeOfLodgementOfDocumentsSegment, placePortOfLoadingSegment,
  warehouseSegment,
} from './segments/loc.segment';
import { beginningOfMessageSegment } from './segments/bgm.segment';
import {
  customsStatusOfGoods2Segment,
  customsStatusOfGoodsSegment,
} from './segments/cst.segment';
import { interchangeHeaderSegment } from './segments/interchange-header.segment';
import {
  customsLineItemMeasurementSegment,
  specifiedTariffQuantity1Segment, specifiedTariffQuantity2Segment, specifiedTariffQuantity3Segment,
  totalGrossWeightSegment, warehouseKeeperSegment,
} from './segments/mea.segment';
import { messageHeaderSegment } from './segments/message-header.segment';
import {
  cifcValueAmountSegment, customsDutyAmountSegment,
  customsValueAmountSegment,
  invoiceItemAmountSegment, overpaidExciseAccountAmountSegment, taxExportAmountSegment,
  taxImportsAmountSegment,
  taxImportsExportsAmountSegment, transactionAmountSegment, underpaidExciseAccountAmountSegment,
} from './segments/moa.segment';
import {
  agentNameAndAddressSegment,
  importerNameAndAddressSegment,
  masterCargoCarrierNameSegment,
  messageSenderNameSegment,
  ownerNameSegment,
  supplierNameAndAddressSegment,
  transporterNameAndAddressSegment,
  unregisteredTraderNameAndAddressSegment,
  vesselsAgentNameSegment,
} from './segments/nad.segment';
import { numberOfPackagesSegment } from './segments/pac.segment';
import { marksAndNumbersSegment } from './segments/pci.segment';
import {
  additionalReferenceNumberSegment,
  deferredPaymentReferenceSegment, enquiryNumberSegment,
  houseBillOfLadingNumberSegment,
  originalMrnSegment,
  previousProcedureMrnSegment, importerReferenceSegment,
  transportDocumentNumberSegment, uniqueConsignmentNumberSegment, exporterReferenceSegment, warehouseEntryNumberSegment,
} from './segments/rff.segment';
import {
  cifcValueTaxSegment, customsDutyFeeSegment,
  importAndExportTaxSegment, overpaidExciseAccountFeeSegment,
  taxDetailsSegment,
  taxExportsFeeDetailsSegment,
  totalDutiesDueAmountSegment,
  totalDutiesDueFeeSegment,
  totalVatDueFeeSegment,
  transactionFeeDetailsSegment, underpaidExciseAccountFeeSegment,
} from './segments/tax.segment';
import { detailsOfTransportSegment } from './segments/tdt.segment';
import { sectionControlSegment } from './segments/uns.segment';
import { messageTrailerSegment } from './segments/unt.segment';
import { interchangeTrailerSegment } from './segments/unz.segment';


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

  const additionalReferenceNumberData = {
    reference_qualifier: 'ACD',
    reference_number: 'REF000000001'
  };

  const enquiryNumberData = {
    reference_qualifier: 'AAV',
    reference_number: '87654321'
  };

  const detailsOfTransportData = {
    transport_stage_qualifier: '20',
    conveyance_reference_number: 'SQ 1234',
    mode_of_transport_coded: '04',
    mode_of_transport: '03',
    type_of_means_of_transport_identification: '',
    carrier_identification: '',
    excess_transportation_reason: '',
    id_means_of_transport: '',
    code_list_qualifier: '',
    code_list_responsible_agency: '',
    id_of_the_means_of_transport: 'ABC Transport'
  };

  const commercialInvoiceData = {
    document_message_name_coded: '380',
    document_message_number: 'AB2019ZA0123'
  };

  const invoiceDateData = {
    date_time_period_qualifier: '3',
    date_time_period: '20190228',
    date_time_period_format_qualifier: '102'
  };

  const importerNameAndAddressData = {
    party_qualifier: 'IM',
    importer_code: '12345678',
    name_and_address_line: '',
    importer_name: 'ABC IMPORTERS',
    importer_street_name_and_number: 'ABC STREET 123',
    importer_building_name_and_floor: 'BUILDING A FLOOR 2',
    importer_suburb: 'PRETORIA',
    city_name: 'GAUTENG',
    country_identification: '',
    postcode_identification: '0001'
  };

  const importerReferenceData = {
    reference_qualifier: 'VA',
    reference_number: '0123456789'
  };

  const agentNameAndAddressData = {
    party_qualifier: 'AG',
    agent_code: '12345678'
  };

  const transporterNameAndAddressData = {
    party_qualifier: 'AF',
    transporter_code: '12345678'
  };

  const supplierNameAndAddressData = {
    party_qualifier: 'SU',
    supplier_code: '12345678',
    name_and_address_line: '',
    supplier_name: 'ABC Suppliers',
    supplier_street_name_and_number: 'ABC Street 123',
    supplier_building_name_and_floor: 'Building A Floor 1',
    supplier_suburb: 'Pretoria',
    supplier_city_town: 'GAUTENG',
    country_identification: '',
    supplier_street_code: '0001'
  };

  const exporterReferenceData = {
    reference_qualifier: 'VA',
    reference_number: '1234567890'
  };

  const messageSenderNameData = {
    party_qualifier: 'MS',
    message_sender: 'ABC'
  };

  const ownerNameData = {
    party_qualifier: 'BY',
    owner_code: '12345678'
  };

  const unregisteredTraderNameAndAddressData = {
    party_qualifier: 'DT',
    unregistered_trader_identification_number: '1234567890',
    code_list_qualifier: '167',
    code_list_responsible_agency: 'ZZZ',
    name_and_address_line: '',
    unregistered_trader_name: 'ABC TRADERS',
    unregistered_trader_street_name_and_number: 'ABC STREET 123',
    unregistered_trader_building_name_and_floor: 'BUILDING B FLOOR 1',
    unregistered_trader_suburb: 'PRETORIA',
    unregistered_trader_city: 'GAUTENG',
    country_identification: '',
    unregistered_trader_street_code: '0001'
  };

  const vesselsAgentData = {
    party_qualifier: 'CG',
    vessel_agent: 'ABCD'
  };

  const masterCargoCarrierNameData = {
    party_qualifier: 'RL',
    master_cargo_carrier: 'ABCD'
  };

  const sectionControlData1 = {
    section_identification: 'D'
  };

  const customsStatusOfGoods2Data = {
    line_number: '1',
    tariff_code: '940161009',
    code_list_qualifier: '108',
    code_list_responsible_agency: 'ZZZ',
    preference_code: '', // fix
    trade_agreement: '100'
  };

  const goodsDescriptionData = {
    text_subject_qualifier: 'AAA',
    description_of_goods_1: 'Description of Goods - 1',
    description_of_goods_2: 'Description of Goods - 2',
    description_of_goods_3: 'Description of Goods - 3',
    description_of_goods_4: 'Description of Goods - 4',
    description_of_goods_5: 'Description of Goods - 5',
  };

  const additionalInformationSg30Data = {
    text_subject_qualifier: 'ACB',
    text_function: '',
    additional_information_code: 'NUIN',
  };

  const customsClearanceInstructionsData = {
    text_subject_qualifier: 'CCI',
    text_function: '',
    requested_procedure: '51',
    previous_procedure: '00',
    procedure_measure: '',
    free_text: '',
    to_be_coded: '1'
  };

  const countryOfOriginData = {
    location_qualifier: '27',
    location_identification: 'CN'
  };

  const specifiedTariffQuantity1Data = {
    measurement_application_qualifier: 'AAR',
    measure_unit_qualifier: 'KG',
    measurement_value: '298.00'
  };

  const specifiedTariffQuantity2Data = {
    measurement_application_qualifier: 'AAS',
    measurement_dimension: 'NO',
    measurement_significance: '13.00'
  };

  const specifiedTariffQuantity3Data = {
    measurement_application_qualifier: 'AAT',
    measurement_dimension: 'NX',
    measurement_significance: '5.00'
  };

  const customsLineItemMeasurementData = {
    measurement_application_qualifier: 'AAF',
    measurement_dimension: 'SW',
    measurement_significance: '7'
  };

  const warehouseKeeperData = {
    party_qualifier: 'WH',
    party_id_identification: '0'
  };

  const invoiceItemAmountData = {
    monetary_amount_type: '38',
    monetary_amount: '7654.32'
  };

  const customsValueAmountData = {
    monetary_amount_type: '40',
    monetary_amount: '7654.32',
  };

  const warehouseEntryNumberData = {
    reference_qualifier: 'WE',
    reference_number: 'ABC201903025000001',
    line_number: '0004'
  };

  const taxDetailsData = {
    tax_function_qualifier: '1',
    tax_type_code: '1P1',
    code_list_qualifier: '107',
    code_list_responsible_agency: 'ZZZ'
  };

  const taxImportsAmountData = {
    monetary_amount_type: '161',
    monetary_amount: '6789.12'
  };

  const importAndExportTaxData = {
    tax_fee_function_qualifier: '1',
    tax_type_code: 'VAT',
    code_list_qualifier: '107',
    code_list_responsible_agency: 'ZZZ'
  };

  const taxImportsExportsAmountData = {
    monetary_amount_type: '161',
    monetary_amount: '77.88'
  };

  const taxExportsFeeDetailsData = {
    tax_function_qualifier: '1',
    tax_fee_code: 'DLA',
    code_list_qualifier: '107',
    code_list_responsible_agency: 'ZZZ'
  };

  const taxExportAmountData = {
    monetary_amount_type: '161',
    monetary_amount: '123.45'
  };

  const sectionControlData2 = {
    section_identification: 'S'
  };

  const cifcValueTaxData = {
    tax_function_qualifier: '3',
    tax_type_code: 'CIF',
    code_list_qualifier: '107',
    code_list_responsible_agency: 'ZZZ'
  };

  const cifcValueAmountData = {
    monetary_amount_type: '161',
    monetary_amount: '785'
  };

  const transactionFeeDetailsData = {
    fee_function_qualifier: '3',
    fee_type_code: 'TRN',
    code_list_qualifier: '107',
    code_list_responsible_agency: 'ZZZ'
  };

  const transactionAmountData = {
    monetary_amount_type: '161',
    monetary_amount: '89456',
    currency_code: 'ADP',
  };

  const totalDutiesDueFeeData = {
    fee_function_qualifier: '3',
    fee_type_code: 'TDD',
    code_list_qualifier: '107',
    code_list_responsible_agency: 'ZZZ'
  };

  const totalDutiesDueAmountData = {
    monetary_amount_type: '161',
    monetary_amount: '5671'
  };

  const totalVatDueFeeData = {
    fee_function_qualifier: '3',
    fee_type_code: 'TVD',
    code_list_qualifier: '107',
    code_list_responsible_agency: 'ZZZ'
  };

  const overpaidExciseAccountFeeData = {
    fee_function_qualifier: '3',
    fee_type_code: 'AOP',
    code_list_qualifier: '107',
    code_list_responsible_agency: 'ZZZ'
  };

  const overpaidExciseAccountAmountData = {
    monetary_amount_type: '161',
    monetary_amount: '9'
  };

  const underpaidExciseAccountFeeData = {
    fee_function_qualifier: '1',
    fee_type_code: 'AUP',
    code_list_qualifier: '107',
    code_list_responsible_agency: 'ZZZ'
  };

  const underpaidExciseAccountAmountData = {
    monetary_amount_type: '161',
    monetary_amount: '15123'
  };

  const customsValueFeeData = {
    duty_qualifier: '3',
    duty_type_code: 'CUS',
    code_list_qualifier: '107',
    code_list_responsible_agency: 'ZZZ'
  };

  const customsDutyAmountData = {
    monetary_amount_type: '161',
    monetary_amount: '768765'
  };

  const messageTrailerData = {
    segments: '151',
    reference_number: '00000000155033'
  };

  const interchangeTrailerData = {
    interchange_control_count: '0',
    interchange_control_reference: 'X'
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
    { segment: additionalReferenceNumberSegment, data: additionalReferenceNumberData },
    { segment: enquiryNumberSegment, data: enquiryNumberData },
    { segment: detailsOfTransportSegment, data: detailsOfTransportData },
    { segment: commercialInvoiceSegment, data: commercialInvoiceData },
    { segment: invoiceDateSegment, data: invoiceDateData },
    { segment: importerNameAndAddressSegment, data: importerNameAndAddressData },
    { segment: importerReferenceSegment, data: importerReferenceData },
    { segment: agentNameAndAddressSegment, data: agentNameAndAddressData },
    { segment: transporterNameAndAddressSegment, data: transporterNameAndAddressData },
    { segment: supplierNameAndAddressSegment, data: supplierNameAndAddressData },
    { segment: exporterReferenceSegment, data: exporterReferenceData },
    { segment: messageSenderNameSegment, data: messageSenderNameData },
    { segment: ownerNameSegment, data: ownerNameData },
    { segment: unregisteredTraderNameAndAddressSegment, data: unregisteredTraderNameAndAddressData },
    { segment: vesselsAgentNameSegment, data: vesselsAgentData },
    { segment: masterCargoCarrierNameSegment, data: masterCargoCarrierNameData },
    { segment: sectionControlSegment, data: sectionControlData1 },
    { segment: customsStatusOfGoods2Segment, data: customsStatusOfGoods2Data },
    { segment: goodsDescriptionSegment, data: goodsDescriptionData },
    { segment: additionalInformationSg30Segment, data: additionalInformationSg30Data },
    { segment: customsClearanceInstructionsSegment, data: customsClearanceInstructionsData },
    { segment: countryOfOriginSegment, data: countryOfOriginData },
    { segment: specifiedTariffQuantity1Segment, data: specifiedTariffQuantity1Data },
    { segment: specifiedTariffQuantity2Segment, data: specifiedTariffQuantity2Data },
    { segment: specifiedTariffQuantity3Segment, data: specifiedTariffQuantity3Data },
    { segment: customsLineItemMeasurementSegment, data: customsLineItemMeasurementData },
    { segment: warehouseKeeperSegment, data: warehouseKeeperData },
    { segment: invoiceItemAmountSegment, data: invoiceItemAmountData },
    { segment: customsValueAmountSegment, data: customsValueAmountData },
    { segment: warehouseEntryNumberSegment, data: warehouseEntryNumberData },
    { segment: taxDetailsSegment, data: taxDetailsData },
    { segment: taxImportsAmountSegment, data: taxImportsAmountData },
    { segment: importAndExportTaxSegment, data: importAndExportTaxData },
    { segment: taxImportsExportsAmountSegment, data: taxImportsExportsAmountData },
    { segment: taxExportsFeeDetailsSegment, data: taxExportsFeeDetailsData },
    { segment: taxExportAmountSegment, data: taxExportAmountData },
    { segment: sectionControlSegment, data: sectionControlData2 },
    { segment: cifcValueTaxSegment, data: cifcValueTaxData },
    { segment: cifcValueAmountSegment, data: cifcValueAmountData },
    { segment: transactionFeeDetailsSegment, data: transactionFeeDetailsData },
    { segment: transactionAmountSegment, data: transactionAmountData },
    { segment: totalDutiesDueFeeSegment, data: totalDutiesDueFeeData },
    { segment: totalDutiesDueAmountSegment, data: totalDutiesDueAmountData },
    { segment: totalVatDueFeeSegment, data: totalVatDueFeeData },
    { segment: overpaidExciseAccountFeeSegment, data: overpaidExciseAccountFeeData },
    { segment: overpaidExciseAccountAmountSegment, data: overpaidExciseAccountAmountData },
    { segment: underpaidExciseAccountFeeSegment, data: underpaidExciseAccountFeeData },
    { segment: underpaidExciseAccountAmountSegment, data: underpaidExciseAccountAmountData },
    { segment: customsDutyFeeSegment, data: customsValueFeeData },
    { segment: customsDutyAmountSegment, data: customsDutyAmountData },
    { segment: messageTrailerSegment, data: messageTrailerData },
    { segment: interchangeTrailerSegment, data: interchangeTrailerData },
  ]);

})()
