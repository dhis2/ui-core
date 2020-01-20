Feature: Rich Text Parsing

    Scenario Outline: String wrapped by tags
        Given there is a text string proceeded by <openTag> and followed immediately by <closeTag>
        Then the parsed text will be rendered as <style>

        Examples:
            | openTag | closeTag | style                    |
            | *       | *        | bold                     |
            | _       | _        | italic                   |
            | -       | -        | underlined               |
            | *_      | _*       | bold, italic             |
            | _*      |  *_      | bold, italic             |
            | -_*     | *_-      | bold, italic, underlined |
            | *-_     | _-*      | bold, italic, underlined |


    Scenario Outline: Emoticons strings
        Given there is a text string of <string>
        And the string is not preceded immediately by a non-space character
        Then the parsed text string will be rendered as <unicode>

        Examples:
            | string | unicode |
            | :)     | U+1F642 |
            | :-)    | U+1F642 |
            | :(     | U+2639  |
            | :-(    | U+2639  |
            | :+1    | U+1F44D |
            | :-1    | U+1F44E |


    Scenario: Automatic URL detection
        Given there is a text string that contains a valid URL
        Then the rendered text string is a clickable hyperlink

    Scenario: Header

    Scenario: List

    Scenario: Number list
