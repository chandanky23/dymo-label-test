const getXmlWithImageObjectToPrint = (base64Image: string) => {
  return `<?xml version="1.0" encoding="utf-8"?>
  <DieCutLabel Version="8.0" Units="twips" MediaType="Default">
    <PaperOrientation>Portrait</PaperOrientation>
    <Id>Shipping4x6</Id>
    <PaperName>1744907 4 in x 6 in</PaperName>
    <DrawCommands>
      <RoundRectangle X="0" Y="0" Width="5918.4" Height="9038.4" Rx="270" Ry="270"/>
    </DrawCommands>
    <ObjectInfo>
      <ImageObject>
        <Name>Image</Name>
        <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>
        <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>
        <LinkedObjectName></LinkedObjectName>
        <Rotation>Rotation0</Rotation>
        <IsMirrored>False</IsMirrored>
        <IsVariable>False</IsVariable>
        <Image>${base64Image}</Image>
        <ScaleMode>Uniform</ScaleMode>
        <BorderWidth>0</BorderWidth>
        <BorderColor Alpha="255" Red="0" Green="0" Blue="0"/>
        <HorizontalAlignment>Center</HorizontalAlignment>
        <VerticalAlignment>Center</VerticalAlignment>
      </ImageObject>
      <Bounds X="91.6" Y="316.8005" Width="5760" Height="8640"/>
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
    const base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII='
    const labelXmlToPrint = getXmlWithImageObjectToPrint(base64Image)
    const label = dymo.label.framework.openLabelXml(labelXmlToPrint)
    label.print(printerName, '', labelXmlToPrint)
    console.log(`Successfully printed label through printer for shipment id ${shipmentId}`)
  } catch (error) {
    console.log(error)
  }
}

export const getAvailablePrinter = async () => {

  // try {
  //   const availabelPrinters = dymo.label.framework.getPrinters() as Printer[]
  //   const dymoLabelPrinter = availabelPrinters.find((printer) => printer.printerType === 'LabelWriterPrinter')
  //   console.log(dymoLabelPrinter)
  //   if (!dymoLabelPrinter) {
  //     return 'No DYMO printers available.'
  //   }
  //   if (!dymoLabelPrinter.isConnected) {
  //     return 'DYMO printer available but not connected.'
  //   }
  //   return dymoLabelPrinter.name
  // } catch (error) {
  //   console.error('error--', error as string | Error)
  // }
  try {
    console.log('here')
    const printer = dymo.label.framework.getLabelWriterPrinters()
    console.log(printer)
    return printer
  } catch(e) {console.log(e)}
}
