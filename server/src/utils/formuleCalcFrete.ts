const formula = (peso: number, constant: number) => {
  return (peso * constant) / 10
}

const formatAndR = (peso: number, constant: number) => {
  const valorComR = formula(peso, constant).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })

  return valorComR
}

const formatNotR = (peso: number, constant: number) => {
  const valorSemR = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(formula(peso, constant))

  return valorSemR
}

const calc = {
  formula,
  formatNotR,
  formatAndR
}

export default calc
