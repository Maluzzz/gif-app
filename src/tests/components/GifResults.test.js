import '@testing-library/jest-dom'

import { shallow } from 'enzyme'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { GifResults } from '../../components/GifResults'
jest.mock('../../hooks/useFetchGifs')

describe('Testing Gif Results Component', () => {

      const category = ''
      

      test('should render the first time without category', () => {
            useFetchGifs.mockReturnValue({
                  data: [],
                  loading: true
            })
            const wrapper = shallow(<GifResults category={category} />)
            expect(wrapper).toMatchSnapshot()
      })

      test('should render with information from useFetchGifs', () => {
            const gifs = [{
                  id: 'abcd',
                  title: 'Hello',
                  url: 'image.jpg'
            }]

            useFetchGifs.mockReturnValue({
                  data: gifs,
                  loading: false
            })
            const wrapper = shallow(<GifResults category={category} />)
            expect(wrapper).toMatchSnapshot()
            expect(wrapper.find('p').exists()).toBe(false)
            expect(wrapper.find('GifItem').length).toBe(gifs.length)
       
      })
    

})
