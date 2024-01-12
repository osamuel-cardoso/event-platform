export function formatToUpperChar(chars: string) {
  const formatedChars = chars.replace(/^\w/, (letter) => {
    return letter.toUpperCase()
  })

  return formatedChars
}
