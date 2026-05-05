$dir = "listas/lista_logica_programacao"
Push-Location $dir
$htmlTemplate = '<!DOCTYPE html><html lang="pt-br"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Exercicio {0} - Logica de Programacao {0}</title></head><body><h1>Exercicio {0} - Logica de Programacao {0}</h1><hr><p id="resultado"></p><script src="ex{0}.js"></script></body></html>'
for($i=1; $i -le 500; $i++) {
  $html = $htmlTemplate -f $i
  $html | Out-File "ex$i.html" -Encoding utf8 -Force
  "" | Out-File "ex$i.js" -Encoding utf8 -Force
  Write-Host "Criado ex$i"
}
Pop-Location
Write-Host "Completo!"
