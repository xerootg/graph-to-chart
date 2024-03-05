all:
	DISPLAY=:0 sudo google-chrome --pack-extension=Source --pack-extension-key=GraphToChart.pem --user-data-dir=/tmp/foooo
	sudo chown xero:xero Source.crx
	mv Source.crx GraphToChart.crx
