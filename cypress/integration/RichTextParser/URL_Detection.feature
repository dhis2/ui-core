Feature: Automatic url detection

  Scenario Outline: Automatic URL detection
      Given there is a text string that contains the URL of <URL>
      And the URL is not preceded or followed immediately by a non-space character
      Then the rendered URL is a <result>

      Examples:
        | URL                                        | result                                                                                              |
        | duck.com                                   | <a href="http://duck.com">duck.com</a>                                                              |
        | www.duck.com                               | <a href="http://www.duck.com">www.duck.com</a>                                                      |
        | https://www.eff.org/                       | <a href="https://www.eff.org/">https://www.eff.org/</a>                                             |
        | https://www.eff.org/about                  | <a href="https://www.eff.org/about">https://www.eff.org/about</a>                                   |
        | act.eff.org                                | <a href="http://act.eff.org">act.eff.org</a>                                                        |
        | https://www.eff.org/events/list?type=event | <a href="https://www.eff.org/events/list?type=event">https://www.eff.org/events/list?type=event</a> |
        | ef*f*.org                                  | <a href="http://ef*f*.org">ef*f*.org</a>                                                            |
        | e_f_f.org                                  | <a href="http://e_f_f.org">e_f_f.org</a>                                                            |
        | example.com/path_to                        | <a href="http://example.com/path_to">example.com/path_to</a>                                        |
        | notion.so                                  | <a href="http://notion.so">notion.so</a>                                                            |
