import fs from 'fs'
import glob from 'glob'

const fixFile = (file) => {
  const data = fs.readFileSync(file)
  let code = data.toString()

  const matchBrokenImports = code.match(/(?<=import\s)(.*)(?=.ts\s)/g)
  if (!matchBrokenImports) return

  const brokenImports = Array.from(matchBrokenImports)
  for (const brokenImport of brokenImports) {
    const regex = new RegExp(`${brokenImport}.ts(?=\\s|,)`, 'g')
    const fix = brokenImport.split('/')[brokenImport.split('/').length - 1]
    code = code.replace(regex, fix)
  }

  fs.writeFileSync(file, code)

  console.log(`fixed ${file}`)
}

glob('src/**/*.graphql.ts', (err, files) => {
  if (err) return console.log(err)

  files.forEach(file => fixFile(file))
})
