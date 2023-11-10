import Processor from 'asciidoctor'

const processor = Processor()

const  html = processor.convertFile('./docs/modules/ROOT/index.adoc',{standalone:true})

console.log('Finished')