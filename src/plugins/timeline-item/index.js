import ElTimelineItem from '../timeline/src/item'

/* istanbul ignore next */
ElTimelineItem.install = Vue => {
    Vue.component(ElTimelineItem.name, ElTimelineItem)
}

export default ElTimelineItem
