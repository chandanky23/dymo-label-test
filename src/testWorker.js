// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  onmessage = function (message) {
    this.self.importScripts('http://labelwriter.com/software/dls/sdk/js/dymo.connect.framework.js')
    if (message.data === 'dymo') {
      // this.window = this
      console.log(this.dymo.label.framework.getPrinters())
    }
  }
}