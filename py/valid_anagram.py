"""
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 
    Example 1:

    Input: s = "anagram", t = "nagaram"
    Output: true
    Example 2:

    Input: s = "rat", t = "car"
    Output: false
"""


def valid_anagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    # use dict instead of sorting the strings
    # since sorting is O(nlogn) and dict is O(n)
    s_dict: dict[str, int] = {}
    t_dict: dict[str, int] = {}
    for i in range(len(s)):
        s_dict[s[i]] = s_dict.get(s[i], 0) + 1
        t_dict[t[i]] = t_dict.get(t[i], 0) + 1
    for key in s_dict:
        if key not in t_dict or s_dict[key] != t_dict[key]:
            return False
    return True
