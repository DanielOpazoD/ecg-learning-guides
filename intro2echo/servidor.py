from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import argparse
import errno
import webbrowser

parser=argparse.ArgumentParser()
parser.add_argument('--port',type=int,default=8769)
parser.add_argument('--no-browser',action='store_true')
args=parser.parse_args()
site=Path(__file__).resolve().parent/'sitio'

class Handler(SimpleHTTPRequestHandler):
    def log_message(self,*args):
        pass

try:
    server=ThreadingHTTPServer(('127.0.0.1',args.port),partial(Handler,directory=str(site)))
except OSError as error:
    if error.errno!=errno.EADDRINUSE:
        raise
    server=ThreadingHTTPServer(('127.0.0.1',0),partial(Handler,directory=str(site)))
url='http://127.0.0.1:'+str(server.server_port)+'/'
print('Intro2Echo: '+url,flush=True)
print('Mantén esta ventana abierta mientras usas la guía. Pulsa Control+C para cerrar.',flush=True)
if not args.no_browser:
    webbrowser.open(url)
try:
    server.serve_forever()
except KeyboardInterrupt:
    pass
finally:
    server.server_close()
