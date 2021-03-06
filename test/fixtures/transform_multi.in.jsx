
/** @jsx React.DOM */
define(function(require) {
  var React = require('react');
  var K = require('../../../constants');
  var Text = require('jsx!../../../components/text');
  var I18n = require('i18n!quiz_statistics');

  var Help = React.createClass({
    render: function() {
      return(
        <div>
          <Text
            phrase="discrimination_index_help"
            articleUrl={K.DISCRIMINATION_INDEX_HELP_ARTICLE_URL}>
            <p>
              This metric provides a measure of how well a single question can tell the
              difference (or discriminate) between students who do well on an exam and
              those who do not.
            </p>

            <p>
              It divides students into three groups based on their score on the whole
              quiz and displays those groups by who answered the question correctly.
            </p>

            <p>
              More information is available
              <a
                href="%{article_url}"
                target="_blank">
                here
              </a>
              .
            </p>
          </Text>

          <span>Separator</span>

          <Text phrase="adooken">Adooken!</Text>
          <Text phrase="adooken_y">Adooken Y!</Text>
          <Text phrase="foo">
            <p>
              This metric provides a measure of how well a single question can tell the
              difference (or discriminate) between students who do well on an exam and
              those who do not.
            </p>
          </Text>
        </div>
      );
    }
  });

  return Help;
});