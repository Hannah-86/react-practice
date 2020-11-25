import {
//  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
//  UPDATE_EVENT,
//  DELETE_EVENT
} from '../actions'

const defaultMembers = [
  {
    id: 1, name: 'koma', sex: 0, role: 'back'
  },
  {
    id: 2, name: 'hana', sex: 1, role: 'front'
  },
  {
    id: 3, name: 'sakura', sex: 1, role: 'server'
  },
  {
    id: 4, name: 'mituki', sex: 1, role: 'design'
  }
]

export default (members = defaultMembers, action) => {
  switch (action.type) {
    case READ_EVENT:
      let newMember
      members.forEach(member => {
        console.log(member, action.id)
        if (member.id === Number(action.id)) {
          newMember = member
        }
      })
      console.log([{ ...newMember }])
      return [{ ...newMember }]
//    case CREATE_EVENT:
//    case READ_EVENT:
//    case UPDATE_EVENT:
//      const data = action.response.data
//      return { ...events, [data.id]: data }
    case READ_EVENTS:
      console.log('Hi')
      return defaultMembers
//      return _.mapKeys(action.response.data, 'id')
//    case DELETE_EVENT:
//      delete events[action.id]
//      return { ...events }
    default:
      return defaultMembers 
  }
}
