@ECHO OFF & CLS & ECHO.
REM This code ensures that the batch is running with admin rights.
REM see http://stackoverflow.com/questions/7044985/how-can-i-auto-elevate-my-batch-file-so-that-it-requests-from-uac-admin-rights/12264592#12264592
NET FILE 1>NUL 2>NUL & IF ERRORLEVEL 1 (ECHO You must right-click and select "Run as administrator" to run this script.& ECHO Exiting... & ECHO. & PAUSE & EXIT /D)

REM ... proceed here with admin rights ...

dism.exe /Online /Enable-Feature /all /FeatureName:IIS-ASPNET45

ECHO. & PAUSE & EXIT /D