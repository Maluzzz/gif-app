import React from 'react'
import '@testing-library/jest-dom'

import { shallow } from 'enzyme'
import GifItem from '../../components/GifItem'

describe("Testing component GifItem", () => {
      //let wrapper = shallow(<GifItem />)
      const title = 'title test'
      const url = 'image.jpg'
      let wrapper = shallow(<GifItem url={url} title={title} />)
      test("should return the component", () => {

            expect(wrapper).toMatchSnapshot()
      })
      test('should have title insidie <p></p>', () => {
            const p = wrapper.find('p')
            expect(p.text().trim()).toBe(title)
      })
      test('should have title insidie img.alt and url into img.src', () => {
            const img = wrapper.find('img')
            expect(img.props().src).toBe(url)
            expect(img.props().alt).toBe(title)
      })

})