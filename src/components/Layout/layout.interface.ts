import { ISeo } from './Meta/meta.interface'

export interface ILayout extends ISeo {
	page: 'home' | 'about'
}
