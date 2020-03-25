Feature: A blocking layer should appear on top of nested applicationTop layers

    Scenario: a blocking layer as sibling to nested stack of applicationTop layers
        Given a blocking layer is a child of an applicationTop layer and sibling of a nested set of applicationTop layers
        Then the blocking layer should have a higher z-index than the last applicatioTop layer
