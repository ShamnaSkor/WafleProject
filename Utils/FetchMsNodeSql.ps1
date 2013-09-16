#=================================================================
#
# This PowerShell script will fetch a working copy of msnodesql
#  from GitHub.
#
#=================================================================

function Get-ScriptDirectory {   # from http://leftlobed.wordpress.com/2008/06/04/getting-the-current-script-directory-in-powershell/
  $Invocation = (Get-Variable MyInvocation -Scope 1).Value 
  Split-Path $Invocation.MyCommand.Path 
} 

pushd (Get-ScriptDirectory)
Remove-Item ..\Wafle\WafleDataExtract\node_modules -recurse -force
pushd $env:temp
mkdir msnodesqltemp
cd msnodesqltemp
git clone git://github.com/joeriks/nodesql_sample/
cd nodesql_sample
popd
Copy-Item $env:temp\msnodesqltemp\nodesql_sample\node_modules ..\Wafle\WafleDataExtract -recurse
Remove-Item $env:temp\msnodesqltemp -recurse -force
popd

