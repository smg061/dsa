package main


func ReverseStringRecur(s string) string {

    if len(s) == 0 || len(s) == 1 {
        return s
    }

    return ReverseStringRecur(s[1:]) + string(s[0])

}
