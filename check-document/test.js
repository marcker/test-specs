'use strict'

const checkDocument = require('./index.js')
const assert = require('assert')

const firstNumber = 0
const lastNumber = 9
const CPFMaxNumber = 11
const CNPJMaxNumber = 14
let documentNumber

describe('Check Documents', () => {
    describe('Invalids', () => {
        it('should return false if "ncxvnjkdsafhkhsd"', () => assert(checkDocument('ncxvnjkdsafhkhsd') === false))
        it('should return false if 126821', () => assert(checkDocument('126821') === false))
        it('should return false if "" (empty string)', () => assert(checkDocument('') === false))
        it('should return false if 0', () => assert(checkDocument(0) === false))
        it('should return false if undefined', () => assert(checkDocument(undefined) === false))
        it('should return false if null', () => assert(checkDocument(null) === false))
        it('should return false if boolean false', () => assert(checkDocument(false) === false))
        it('should return false if boolean true', () => assert(checkDocument(true) === false))
    })

    describe('CPF', () => {
        describe('Valid', () => {
            it('should return true if 08872237378', () => assert(checkDocument('08872237378') === true))
            it('should return true if 67534732034', () => assert(checkDocument('67534732034') === true))
        })

        describe('Invalid', () => {
            it('should return false if 51816748929', () => assert(checkDocument('51816748929') === false))
            it('should return false if 01234567890', () => assert(checkDocument('01234567890') === false))

            for (let i = firstNumber; i <= lastNumber; i += 1) {
                documentNumber = `${i}`.repeat(CPFMaxNumber)

                it(`should return false if ${documentNumber}`, () => assert(checkDocument(documentNumber) === false))
            }
        })
    })

    describe('CNPJ', () => {
        describe('Valid', () => {
            it('should return true if 23720164000199', () => assert(checkDocument('23720164000199') === true))
            it('should return true if 56968103000102', () => assert(checkDocument('56968103000102') === true))
        })

        describe('Invalid', () => {
            it('should return false if 83839302021204', () => assert(checkDocument('83839302021204') === false))

            for (let i = firstNumber; i <= lastNumber; i += 1) {
                let documentNumber = `${i}`.repeat(CNPJMaxNumber)

                it(`should return false if ${documentNumber}`, () => assert(checkDocument(documentNumber) === false))
            }
        })
    })
})

