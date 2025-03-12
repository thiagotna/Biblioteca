import getPublisherByName from '@/http/controllers/publisher/getPublisher'
import addPublisher from '@/http/controllers/publisher/addPublisher'
import updatePublisher from '@/http/controllers/publisher/updatePublisher'
import deletePublisher from '@/http/controllers/publisher/deletePublisher'

const publisherRoutes = {
  '/publisher': {
    POST: addPublisher,
  },
  '/publisher/:name': {
    GET: getPublisherByName,
    PUT: updatePublisher,
    DELETE: deletePublisher,
  },
}

export default publisherRoutes
