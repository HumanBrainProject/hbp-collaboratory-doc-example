# HBP Collaboratory documentation example

This example shows how to set up your documentation project with the
hbp-sphinx-theme git submodule. This way you will be able to contribute
to the main hbp-sphinx-theme project and see the changes live in your
documentation. The actual documentation is located in the [doc](doc/) folder and
[hbp-sphinx-theme](hbp-sphinx-theme/) contains
[hbp-sphinx-theme](https://github.com/HumanBrainProject/hbp-sphinx-theme)
git submodule (`git submodule add git@github.com:HumanBrainProject/hbp-sphinx-theme.git`)

To start developing the documentation:

* Create a python virtual environment: `virtualenv venv`
* Install sphinx into venv: `venv/bin/pip install sphinx`
* Make sure you have Node.js, bower and grunt: `npm install -g bower grunt-cli`
* Install the dependencies: `npm install`
* Install the hbp-sphinx-theme bower dependencies: `(cd hbp-sphinx-theme; bower install)`

Now that your environment is set up, go to this repository in your terminal and run grunt:
```
grunt serve
```

This task will open your browser with the example documentation project and
refresh it automatically when there are changes to the theme or documentation
files.
