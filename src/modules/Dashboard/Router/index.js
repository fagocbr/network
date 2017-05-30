export default [
  {
    path: '/dashboard',
    component: 'Dashboard/Index',
    children: [
      {
        path: '', component: 'Dashboard/Components/Home'
      },
      {
        path: 'academic', component: 'Dashboard/Components/Academic'
      },
      {
        path: 'financial', component: 'Dashboard/Components/Financial'
      },
      {
        path: 'ombudsman', component: 'Dashboard/Components/Ombudsman'
      },
      {
        path: 'files', component: 'Dashboard/Components/Files'
      },
      {
        path: 'benefits', component: 'Dashboard/Components/Benefits'
      },
      {
        path: 'indication', component: 'Dashboard/Components/Indication'
      },
      {
        path: 'dispensation', component: 'Dashboard/Components/Dispensation'
      },
      {
        path: 'graduation', component: 'Dashboard/Components/Graduation'
      },
      {
        path: '*', component: 'Dashboard/Components/Home'
      }
    ]
  }
]
