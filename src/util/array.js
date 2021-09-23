import _ from "lodash"

export const randomSliceIntoNGivenValues = (array, sliceArray) => {
    if (_.reduce(sliceArray, (sum, n) => sum + n) !== array.length) return array

    let result = []
    let mutatedArray = _.clone(array)

    sliceArray.map((randomQuantity, index) => {
        let randomIndexes = []

        while (randomIndexes.length < randomQuantity) {
            const rnd = _.random(0, mutatedArray.length - 1)
            if (!_.includes(randomIndexes, rnd)) randomIndexes.push(rnd)
        }

        result.push(_.remove(mutatedArray, (value, index) => _.includes(randomIndexes, index)))

        return randomQuantity
    })

    return result
}