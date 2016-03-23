describe("Splitter", function() {
  var splitter;
  var textarea;
  var numberOfGroups;

  var createTextArea = function() {
    textarea = document.createElement("textarea");
    textarea.setAttribute("id", "attendees");
    textarea.value = "Jon Doe\nJane Doe";
    document.body.appendChild(textarea);
  };

  var removeTextArea = function() {
    document.body.removeChild(textarea);
  };

  beforeEach(function() {
    numberOfGroups = 4;
    splitter       = new Splitter(numberOfGroups);
  });

  it("should take a textarea and return its contents", function() {
    createTextArea();
    expect(splitter.getContentsFrom("attendees")).toEqual("Jon Doe\nJane Doe");
    removeTextArea();
  });

  it("should split the contents by line", function() {
    var userInput  = "Jon Doe\nJane Doe";
    var splitInput = [ "Jon Doe", "Jane Doe" ];
    expect(splitter.getAttendees(userInput)).toEqual(splitInput);
  });

  it("sorts four attendees into a row of one per group", function() {
    var attendees = ["Jon Doe", "Jane Doe", "Doe Jon", "Doe Jane"];
    var sorted    = [["Jon Doe", "Jane Doe", "Doe Jon", "Doe Jane"]];
    expect(splitter.sort(attendees)).toEqual(sorted);
  });

  it("sorts five attendees into a row of one per group and a second row of one", function() {
    var attendees = ["Jon Doe", "Jane Doe", "Doe Jon", "Doe Jane", "Number Five"];
    var sorted    = [["Jon Doe", "Jane Doe", "Doe Jon", "Doe Jane"], ["Number Five"]];
    expect(splitter.sort(attendees)).toEqual(sorted);
  });

  it("takes a textarea and returns the sorted attendees", function() {
    createTextArea();
    var attendees = "Jon Doe\nJane Doe\nDoe Jon\nDoe Jane\nNumber Five";
    var sorted    = [["Jon Doe", "Jane Doe", "Doe Jon", "Doe Jane"], ["Number Five"]];
    document.getElementById("attendees").value = attendees;
    expect(splitter.splitInGroups("attendees")).toEqual(sorted);
    removeTextArea();
  });
});
