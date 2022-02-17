onmessage = (e) => {
  // eslint-disable-next-line no-console
  console.log(e)
  let response
  const availabelPrinters = dymo.label.framework.getPrinters()
  const dymoLabelPrinter = availabelPrinters.find((printer) => printer.printerType === 'LabelWriterPrinter')
  if (!dymoLabelPrinter) {
    response = 'No DYMO printers available.'
  } else if (!dymoLabelPrinter.isConnected) {
    response = 'DYMO printer available but not connected.'
  } else {
    response = dymoLabelPrinter.name
  }
  postMessage(response)
}

export {}
