function ytlt(baseUrl) {
	var self = this;
	var _baseUrl = baseUrl;
	var __construct = function() {
		self._settings = {
		}

		self.tryInitialValue = function() {
			var fullpath = $(location).attr('href');
			var path = self.getPath(fullpath);
			if(path.length == 0) {
				self.setValue("You talk like this");
			} else {
				var queryInput = "";
				queryInput = path.replace("+", " ");
				queryInput = queryInput.replace("?", "");
				self.setValue(queryInput);
			}
		}

		self.getPath = function(queryString) {
			return queryString.replace(_baseUrl, "")
		}

		self.trackInput = function() {
			var e = document.getElementById("wrapper");
			e.addEventListener("input", function() {
				self.performReplace();
			}, false);
		};

		self.performReplace = function() {
			var currentValue = self.getValue().toLowerCase();
			console.log("Changing '" + currentValue + "'...");
			var maxLowerCaseAmount = 1;
			var currentLowerCaseAmount = 0;
			var newValue = "";
			for(var i = 0; i < currentValue.length; i ++) {
				if(maxLowerCaseAmount < currentLowerCaseAmount) {
					currentLowerCaseAmount = 0;
					// simple add the lowercased value
					newValue += currentValue[i];
				} else {
					if(this.randomChoice()) {
						newValue += currentValue[i].toUpperCase();
					} else {
						newValue += currentValue[i].toLowerCase();
						currentLowerCaseAmount++;
					}
				}
			}
			console.log(currentLowerCaseAmount);

			self.setValue(newValue);
		};

		self.getValue = function() {
			return document.getElementsByClassName("ytlt")[0].value;
		};

		self.setValue = function(val) {
				document.getElementsByClassName("ytlt")[0].value = val;
		}

		self.randomChoice = function() {
			var r = Math.floor(Math.random()*2);
			if(r === 1 ) {
				return true;
			} else {
				return false;
			}
		}
	}();
}
