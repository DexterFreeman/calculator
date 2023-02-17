

describe('Single Operator Calculatation testing', () => {
  beforeEach(() => {
    cy.viewport(1200, 1080)
    cy.visit('http://127.0.0.1:5501/')
  })
  it('Adds 9+7 should result 16', () => {
    const button9 = cy.get('.calculator__buttons > :nth-child(7)')
    button9.click()
    const buttonPlus = cy.get('.calculator__buttons > :nth-child(16)')
    buttonPlus.click()
    const button7 = cy.get('.calculator__buttons > :nth-child(5)')
    button7.click()
    const buttonEquals = cy.get('.calculator__buttons-equals')
    buttonEquals.click()
    const total = cy.get('#calculator__display-answer')
    total.should("have.text", "16")
  })
  it('Adds 105+35+2', () => {
   

    const button1 = cy.get('.calculator__buttons > :nth-child(13)')
    button1.click()

    const button0 = cy.get('.calculator__buttons > :nth-child(17)')
    button0.click()

    const button5 = cy.get('.calculator__buttons > :nth-child(10)')
    button5.click()

    const buttonPlus = cy.get('.calculator__buttons > :nth-child(16)')
    buttonPlus.click()

    const button3 = cy.get('.calculator__buttons > :nth-child(15)')
    button3.click()
    button5.click()
    buttonPlus.click()

    const button2 = cy.get('.calculator__buttons > :nth-child(14)')
    button2.click()
    const buttonEquals = cy.get('.calculator__buttons-equals')
    buttonEquals.click()
    const total = cy.get('#calculator__display-answer')
    total.should("have.text", "142")
  })
  it('Subtracts 9-3', () => {


    const button9 = cy.get('.calculator__buttons > :nth-child(7)')
    button9.click()
    const buttonSubtract = cy.get('.calculator__buttons > :nth-child(12)')
    buttonSubtract.click()
    const button3 = cy.get('.calculator__buttons > :nth-child(15)')
    button3.click()
    const buttonEquals = cy.get('.calculator__buttons-equals')
    buttonEquals.click()
    const total = cy.get('#calculator__display-answer')
    total.should("have.text", "6")
  })
  it('Subtracts 104-3-36', () => {

    const button1 = cy.get('.calculator__buttons > :nth-child(13)')
    const button0 = cy.get('.calculator__buttons > :nth-child(17)')
    const button4 = cy.get('.calculator__buttons > :nth-child(9)')
    const button3 = cy.get('.calculator__buttons > :nth-child(15)')
    const button6 = cy.get('.calculator__buttons > :nth-child(11)')
    const buttonSubtract = cy.get('.calculator__buttons > :nth-child(12)')
    const buttonEquals = cy.get('.calculator__buttons-equals')

    button1.click()
    button0.click()
    button4.click()
    buttonSubtract.click()
    button3.click()
    buttonSubtract.click()
    button3.click()
    button6.click()
    buttonEquals.click()

    const total = cy.get('#calculator__display-answer')
    total.should("have.text", "65")
  })
  it('Multiplies 5x4', () => {
 

    const button5 = cy.get('.calculator__buttons > :nth-child(10)')
    const button4 = cy.get('.calculator__buttons > :nth-child(9)')

    const buttonMultiply = cy.get('.calculator__buttons > :nth-child(8)')
    const buttonEquals = cy.get('.calculator__buttons-equals')

    button5.click()
    buttonMultiply.click()
    button4.click()
    buttonEquals.click()

    const total = cy.get('#calculator__display-answer')
    total.should("have.text", "20")
  })
  it('Multiplies 7x2x3', () => {


    const button7 = cy.get('.calculator__buttons > :nth-child(5)')
    const button2 = cy.get('.calculator__buttons > :nth-child(14)')
    const button3 = cy.get('.calculator__buttons > :nth-child(15)')
    const buttonMultiply = cy.get('.calculator__buttons > :nth-child(8)')
    const buttonEquals = cy.get('.calculator__buttons-equals')

    button7.click()
    buttonMultiply.click()
    button2.click()
    buttonMultiply.click()
    button3.click()
    buttonEquals.click()

    const total = cy.get('#calculator__display-answer')
    total.should("have.text", "42")
  })
  it('Divides 8/2', () => {


    const button8 = cy.get('.calculator__buttons > :nth-child(6)')
    const button2 = cy.get('.calculator__buttons > :nth-child(14)')
    const buttonDivide = cy.get('.calculator__buttons > :nth-child(4)')
    const buttonEquals = cy.get('.calculator__buttons-equals')

    button8.click()
    buttonDivide.click()
    button2.click()
    buttonEquals.click()

    const total = cy.get('#calculator__display-answer')
    total.should("have.text", "4")
  })
  it('Divides 80/5/2', () => {



    const button8 = cy.get('.calculator__buttons > :nth-child(6)')
    const button0 = cy.get('.calculator__buttons > :nth-child(17)')
    const button5 = cy.get('.calculator__buttons > :nth-child(10)')
    const button2 = cy.get('.calculator__buttons > :nth-child(14)')
    const buttonDivide = cy.get('.calculator__buttons > :nth-child(4)')
    const buttonEquals = cy.get('.calculator__buttons-equals')

    button8.click()
    button0.click()
    buttonDivide.click()
    button5.click()
    buttonDivide.click()
    button2.click()
    buttonEquals.click()

    const total = cy.get('#calculator__display-answer')
    total.should("have.text", "8")
  })
  
});



describe('Additional commands', () => {
  it('Square roots 100', () => {
    cy.viewport(1200, 1080)
    cy.visit('http://127.0.0.1:5501/')

    const button1 = cy.get('.calculator__buttons > :nth-child(13)')
    const button0 = cy.get('.calculator__buttons > :nth-child(17)')

    const buttonSquareroot = cy.get('.calculator__buttons > :nth-child(22)')

    button1.click()
    button0.click()
    button0.click()
    buttonSquareroot.click()
    const total = cy.get('#calculator__display-answer')
    total.should("have.text", "10")
  })
  it('Rounds 5.7 to 6', () => {
    cy.viewport(1200, 1080)
    cy.visit('http://127.0.0.1:5501/')

    const button5 = cy.get('.calculator__buttons > :nth-child(10)')
    const button7 = cy.get('.calculator__buttons > :nth-child(5)')
    const buttonDecimal = cy.get('.calculator__buttons > :nth-child(18)')
    const buttonRound = cy.get('.calculator__buttons > :nth-child(23)')

    button5.click()
    buttonDecimal.click()
    button7.click()
    buttonRound.click()
    const total = cy.get('#calculator__display-answer')
    total.should("have.text", "6")
  })
  it('Finds percentage of 4 over 200', () => {
    cy.viewport(1200, 1080)
    cy.visit('http://127.0.0.1:5501/')

    const button4 = cy.get('.calculator__buttons > :nth-child(9)')
    const button2 = cy.get('.calculator__buttons > :nth-child(14)')
    const button0 = cy.get('.calculator__buttons > :nth-child(17)')
    const buttonPercentage = cy.get('.calculator__buttons > :nth-child(3)')
    const buttonEquals = cy.get('.calculator__buttons-equals')
 

    button4.click()
    buttonPercentage.click()
    button2.click()
    button0.click()
    button0.click()    
    buttonEquals.click()

    const total = cy.get('#calculator__display-answer')
    total.should("have.text", "2")
  })
  it('Deletes last number correctly', () => {
    cy.viewport(1200, 1080)
    cy.visit('http://127.0.0.1:5501/')

    const button8 = cy.get('.calculator__buttons > :nth-child(6)')
    const button7 = cy.get('.calculator__buttons > :nth-child(5)')
    const buttonDel = cy.get('.calculator__buttons > :nth-child(2)')
 

    button8.click()
    button7.click()
    buttonDel.click()

    const total = cy.get('#calculator__display-answer')
    total.should("have.text", "8")
  })
  it('Clears display', () => {
    cy.viewport(1200, 1080)
    cy.visit('http://127.0.0.1:5501/')

    const button8 = cy.get('.calculator__buttons > :nth-child(6)')
    const button7 = cy.get('.calculator__buttons > :nth-child(5)')
    const buttonC = cy.get('.calculator__buttons > :nth-child(1)')
 

    button8.click()
    button7.click()
    buttonC.click()

    const total = cy.get('#calculator__display-answer')
    total.should("have.text", "0")
  })
})



describe('Handles PI, Scientific Notation & Decimals', () => {
  it('Multiples 5 and PI', () => {
    cy.viewport(1200, 1080)
    cy.visit('http://127.0.0.1:5501/')

    const buttonPI = cy.get('.calculator__buttons > :nth-child(21)')
    const button5 = cy.get('.calculator__buttons > :nth-child(10)')
    const buttonEquals = cy.get('.calculator__buttons-equals')
    const buttonMultiply = cy.get('.calculator__buttons > :nth-child(8)')

    button5.click()
    buttonMultiply.click()
    buttonPI.click()
    buttonEquals.click()
    const total = cy.get('#calculator__display-answer')
    total.should("have.text", "15.707963267948966")
  })
  it('Divides 27 and PI', () => {
    cy.viewport(1200, 1080)
    cy.visit('http://127.0.0.1:5501/')

    const buttonPI = cy.get('.calculator__buttons > :nth-child(21)')
    const button2 = cy.get('.calculator__buttons > :nth-child(14)')
    const button7 = cy.get('.calculator__buttons > :nth-child(5)')
    const buttonEquals = cy.get('.calculator__buttons-equals')
    const buttonDivide = cy.get('.calculator__buttons > :nth-child(4)')

    button2.click()
    button7.click()
    buttonDivide.click()
    buttonPI.click()
    buttonEquals.click()
    const total = cy.get('#calculator__display-answer')
    total.should("have.text", "8.594366926962348")
  })
  it('Multiples 2.5e+20 by 10', () => {
    cy.viewport(1200, 1080)
    cy.visit('http://127.0.0.1:5501/')

    const button2 = cy.get('.calculator__buttons > :nth-child(14)')
    const buttonDecimal = cy.get('.calculator__buttons > :nth-child(18)')
    const button5 = cy.get('.calculator__buttons > :nth-child(10)')
    const buttonE = cy.get('.calculator__buttons > :nth-child(19)')
    const buttonPlus = cy.get('.calculator__buttons > :nth-child(16)')
    const button1 = cy.get('.calculator__buttons > :nth-child(13)')
    const button0 = cy.get('.calculator__buttons > :nth-child(17)')
    const buttonEquals = cy.get('.calculator__buttons-equals')
    const buttonMultiply = cy.get('.calculator__buttons > :nth-child(8)')

    button2.click()
    buttonDecimal.click()
    button5.click()
    buttonE.click()
    buttonPlus.click()
    button2.click()
    button0.click()
    buttonMultiply.click()
    button1.click()
    button0.click()
    buttonEquals.click()
    const total = cy.get('#calculator__display-answer')
    total.should("have.text", "2.5e+21")
  })
 

})