import { renderHook } from '@testing-library/react-hooks'

import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Testing in useFetchGifs', () => {

      test('should return the original state', async() => {
         
            const { result, waitForNextUpdate } = renderHook(() => useFetchGifs())
            const { data, loading } = result.current
            await waitForNextUpdate()
            expect(data).toEqual([])
            expect(loading).toBe(true)
      })

      test('should return arrays of images and loading to false', async() => {
            const { result , waitForNextUpdate} = renderHook(() => useFetchGifs('Hello world'))
            await waitForNextUpdate()
            const { data, loading } = result.current

            expect(data.length).toBe(4)
            expect(loading).toBe(false)
      })
      


})
