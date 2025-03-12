import getPublisherByName from '@/http/controllers/publisher/getPublisher'
import addPublisher from '@/http/controllers/publisher/addPublisher'

const publisherRoutes = {
  '/publisher': {
    POST: addPublisher,
  },
  '/publisher/:name': {
    GET: getPublisherByName,
  },
}

export default publisherRoutes
