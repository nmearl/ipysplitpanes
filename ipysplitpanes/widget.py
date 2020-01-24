import ipywidgets as widgets
from traitlets import Unicode, Dict

__all__ = ['SplitPanes']

@widgets.register
class SplitPanes(widgets.DOMWidget):
    """An example widget."""
    # Name of the widget model class in front-end
    _model_name = Unicode('SplitPanesModel').tag(sync=True)

    # Name of the front-end module containing widget model
    _model_module = Unicode('jupyter-splitpanes').tag(sync=True)

    # Version of the front-end module containing widget model
    _model_module_version = Unicode('^0.1.0').tag(sync=True)

    group = Dict().tag(sync=True)
    tag = Unicode().tag(sync=True)
    component_data = Dict().tag(sync=True)

