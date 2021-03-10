'use strict'

const Uploadfile = use("App/Models/Uploadfile");
const Helpers = use("Helpers");
class UploadFileController {
    async show({ params, response }) {
        return response.download(Helpers.tmpPath(`temp/${params.path}`));
      }

    async store({ request }) {
            const images = request.file("imagem", {
                types: ["image"],
                size: "2mb"
            });
    
            await images.move(Helpers.tmpPath('uploads'), file => ({
                name: `-${file.id}-${Date.now()}-${file.clientName}`
              }))

            if(!images.moved()) {
                return images.error();
            }

            await Promise.all(
                images
                  .movedList()
                  .map(image => Uploadfiles.create({ path: image.fileName}))
            )
        
    }
}

module.exports = UploadFileController
