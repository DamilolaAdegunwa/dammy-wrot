email regex from https://stackoverflow.com/questions/5342375/regex-email-validation
-----------------------------------------------------------------------------------

@"^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"

password regex from https://stackoverflow.com/questions/5859632/regular-expression-for-password-validation
----------------------------------------------------------------------------------------------------------

(?=^.{8,25}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?!.*\s).*$
(Between 8 and 25 inclusive, contains atleast one digit, atleast one upper case and atleast one lower case and no whitespace.)