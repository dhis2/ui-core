Feature: Required status for the MultiSelectField

    Scenario: Rendering a MultiSelectField that is required
        Given a MultiSelectField with label and a required flag is rendered
        Then an asterisk is visible
