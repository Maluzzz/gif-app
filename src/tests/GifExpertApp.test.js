import '@testing-library/jest-dom'

import { shallow } from 'enzyme'

import { GifExpertApp } from '../GifExpertApp'

describe('testing GifExpertApp', () => {

      test('should render the component', () => {

            const wrapper = shallow(<GifExpertApp />)
            expect(wrapper).toMatchSnapshot()
      })

      test('should render list of categories', () => {

            const categories = ['Marvel', 'IronMan']
            const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
            expect(wrapper).toMatchSnapshot()
            expect(wrapper.find('GifResults').length).toBe(categories.length)
      })
})
