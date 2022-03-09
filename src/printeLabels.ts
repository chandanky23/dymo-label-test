const getXmlWithImageObjectToPrint = (base64Image: string) => {
  return `<?xml version="1.0" encoding="utf-8"?>
  <DieCutLabel Version="8.0" Units="twips" MediaType="Default">
    <PaperOrientation>Portrait</PaperOrientation>
    <Id>LargeShipping</Id>
    <IsOutlined>false</IsOutlined>
    <PaperName>30256 Shipping</PaperName>
    <DrawCommands>
      <RoundRectangle X="0" Y="0" Width="3331" Height="5715" Rx="270" Ry="270" />
    </DrawCommands>
    <ObjectInfo>
      <BarcodeObject>
        <Name>Barcode</Name>
        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />
        <LinkedObjectName />
        <Rotation>Rotation0</Rotation>
        <IsMirrored>False</IsMirrored>
        <IsVariable>True</IsVariable>
        <GroupID>-1</GroupID>
        <IsOutlined>False</IsOutlined>
        <Text>123456</Text>
        <Type>Code39</Type>
        <Size>Medium</Size>
        <TextPosition>Bottom</TextPosition>
        <TextFont Family="Arial" Size="7.3125" Bold="False" Italic="False" Underline="False" Strikeout="False" />
        <CheckSumFont Family="Arial" Size="7.3125" Bold="False" Italic="False" Underline="False" Strikeout="False" />
        <TextEmbedding>None</TextEmbedding>
        <ECLevel>0</ECLevel>
        <HorizontalAlignment>Center</HorizontalAlignment>
        <QuietZonesPadding Left="0" Top="0" Right="0" Bottom="0" />
      </BarcodeObject>
      <Bounds X="82" Y="4147.2001953125" Width="3192" Height="979.200012207031" />
    </ObjectInfo>
    <ObjectInfo>
      <AddressObject>
        <Name>Address</Name>
        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />
        <LinkedObjectName />
        <Rotation>Rotation0</Rotation>
        <IsMirrored>False</IsMirrored>
        <IsVariable>True</IsVariable>
        <GroupID>-1</GroupID>
        <IsOutlined>False</IsOutlined>
        <HorizontalAlignment>CenterBlock</HorizontalAlignment>
        <VerticalAlignment>Middle</VerticalAlignment>
        <TextFitMode>ShrinkToFit</TextFitMode>
        <UseFullFontHeight>True</UseFullFontHeight>
        <Verticalized>False</Verticalized>
        <StyledText>
          <Element>
            <String xml:space="preserve">Click here to enter text</String>
            <Attributes>
              <Font Family="Arial" Size="26" Bold="False" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
        </StyledText>
        <ShowBarcodeFor9DigitZipOnly>False</ShowBarcodeFor9DigitZipOnly>
        <BarcodePosition>AboveAddress</BarcodePosition>
        <LineFonts>
          <Font Family="Arial" Size="26" Bold="False" Italic="False" Underline="False" Strikeout="False" />
        </LineFonts>
      </AddressObject>
      <Bounds X="82" Y="1552.80004882813" Width="3186.80004882813" Height="2168.39990234375" />
    </ObjectInfo>
    <ObjectInfo>
      <ShapeObject Stroke="SolidLine">
        <Name>Shape</Name>
        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />
        <LinkedObjectName />
        <Rotation>Rotation0</Rotation>
        <IsMirrored>False</IsMirrored>
        <IsVariable>False</IsVariable>
        <GroupID>-1</GroupID>
        <IsOutlined>False</IsOutlined>
        <ShapeType>HorizontalLine</ShapeType>
        <LineWidth>45</LineWidth>
        <LineAlignment>Center</LineAlignment>
        <FillColor Alpha="0" Red="255" Green="255" Blue="255" />
      </ShapeObject>
      <Bounds X="82" Y="3780" Width="3147" Height="45" />
    </ObjectInfo>
    <ObjectInfo>
      <ShapeObject Stroke="SolidLine">
        <Name>Shape1</Name>
        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />
        <LinkedObjectName />
        <Rotation>Rotation0</Rotation>
        <IsMirrored>False</IsMirrored>
        <IsVariable>False</IsVariable>
        <GroupID>-1</GroupID>
        <IsOutlined>False</IsOutlined>
        <ShapeType>HorizontalLine</ShapeType>
        <LineWidth>45</LineWidth>
        <LineAlignment>Center</LineAlignment>
        <FillColor Alpha="0" Red="255" Green="255" Blue="255" />
      </ShapeObject>
      <Bounds X="82" Y="1410" Width="3147" Height="45" />
    </ObjectInfo>
    <ObjectInfo>
      <TextObject>
        <Name>Text</Name>
        <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
        <BackColor Alpha="0" Red="255" Green="255" Blue="255" />
        <LinkedObjectName />
        <Rotation>Rotation0</Rotation>
        <IsMirrored>False</IsMirrored>
        <IsVariable>True</IsVariable>
        <GroupID>-1</GroupID>
        <IsOutlined>False</IsOutlined>
        <HorizontalAlignment>Center</HorizontalAlignment>
        <VerticalAlignment>Middle</VerticalAlignment>
        <TextFitMode>ShrinkToFit</TextFitMode>
        <UseFullFontHeight>True</UseFullFontHeight>
        <Verticalized>False</Verticalized>
        <StyledText>
          <Element>
            <String xml:space="preserve">Click here to enter name</String>
            <Attributes>
              <Font Family="Arial" Size="14" Bold="False" Italic="False" Underline="False" Strikeout="False" />
              <ForeColor Alpha="255" Red="0" Green="0" Blue="0" HueScale="100" />
            </Attributes>
          </Element>
        </StyledText>
      </TextObject>
      <Bounds X="150" Y="336" Width="3015" Height="930" />
    </ObjectInfo>
  </DieCutLabel>
`
}

type Printer = {
  isConnected: boolean
  name: string
  printerType: string
}

export const printLabels = async (printerName: string, shipmentId: string) => {
  try {
    const base64Image = 'data:image/png;base64,'
    const labelXmlToPrint = getXmlWithImageObjectToPrint('base64Image')
    console.log(labelXmlToPrint)
    const label = dymo.label.framework.openLabelXml(labelXmlToPrint)
    label.print(printerName, '', labelXmlToPrint)
    console.log(`Successfully printed label through printer for shipment id ${shipmentId}`)
  } catch (error) {
    console.log(error)
  }
}

export const getAvailablePrinter = async () => {

  try {
    const availabelPrinters = dymo.label.framework.getPrinters() as Printer[]
    const LaberWritterPrinter = dymo.label.framework.getLabelWriterPrinters()
    console.log('LaberWritterPrinter--', LaberWritterPrinter)
    const dymoLabelPrinter = availabelPrinters.find((printer) => printer.printerType === 'LabelWriterPrinter')
    console.log(dymoLabelPrinter)
    if (!dymoLabelPrinter) {
      return 'No DYMO printers available.'
    }
    if (!dymoLabelPrinter.isConnected) {
      return 'DYMO printer available but not connected.'
    }
    return dymoLabelPrinter.name
  } catch (error) {
    console.error('error--', error as string | Error)
  }
}
