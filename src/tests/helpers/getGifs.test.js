import getGifs from "../../helpers/getGifs"

describe('Testing GetGifs function', () => {
      test('should get 4 elements from api', async() => {
           const result = await getGifs('Hello world')
           expect(result.length).toBe(4)
      })
      test('should get 0 elements from api', async() => {
            const result = await getGifs('')
            expect(result.length).toBe(0)
            expect(result).toEqual([])
       })
})
