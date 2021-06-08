const settings = {
  "name": "cru-sub-pages",
  "state": {
    "frontity": {
      "url": "https://frontly.flywheelsites.com/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "frontity-chakra-theme",
      "state": {
        "theme": {
          "menu": [
            ['Hosting & Support', "/hosting-support/"],
            ["CRU Team", "/cru-team/"],
            ["Pricing", "/pricing/"],
            ["SOS", "https://help.cru.io/portal/en-gb/home", 'has-full-background']
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://frontly.flywheelsites.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
