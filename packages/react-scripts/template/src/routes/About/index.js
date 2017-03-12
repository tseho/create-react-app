import { createAsyncComponent } from 'react-async-component'

export default createAsyncComponent({
    resolve: () => import('./containers/AboutContainer')
})
