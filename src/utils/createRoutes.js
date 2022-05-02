import componentMap from '../router/componentMap'
import Layout from '../layout/Layout.vue'

const componentKeys = Object.keys(componentMap)

export default function createRoutes(data){
  const result = []
  const children = [
    { path: '/404', name: '404', component: () => import('@/components/404.vue'), }
  ]
  const redirectPath = data[0].list[0].route_path

  result.push({
    children,
    path: '/',
    component: Layout,
    redirect: redirectPath,
  })

  data.forEach(item => {
    generateRoutes(children, item)
  })

  result.push({
    path: '*',
    redirect: '/404',
  })

  return result
}

function generateRoutes(children, item){
  const path = item.route_path

  if (componentKeys.includes(path)) {
    children.push({
      path,
      name: path,
      component: componentMap[path],
      meta: {
        title: item.title,
        icon: item.icon
      },
    })
  }

  if (item.list && item.list.length > 0) {
    item.list.forEach(e => generateRoutes(children, e))
  }
}