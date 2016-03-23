describe("Displayer", function() {
  var tbody;
  var numberOfGroups;
  var displayer;

  var createTBody = function() {
    tbody = document.createElement("tbody");
    tbody.setAttribute("id", "results");
    document.body.appendChild(tbody);
  };

  var removeTBody = function() {
    document.body.removeChild(tbody);
  };

  beforeEach(function() {
    numberOfGroups = 4;
    displayer      = new Displayer(numberOfGroups);
  });

  it("prepares attendees structure for view in a table", function() {
    var attendees = ["Number five"];
    var prepared  = ["Number five", "", "", ""];
    expect(displayer.prepareForView(attendees)).toEqual(prepared);
  });

  it("generates content wrapped by tags", function() {
    tagName = "p";
    content = "content";
    expect(displayer.buildTag(tagName, content)).toEqual("<p>content</p>");
  });

  it("generates columns from an array of attendees", function() {
    var attendees = ["Jon Doe", "Jane Doe", "Doe Jon", "Doe Jane"];
    var columns   = "<td>Jon Doe</td>"  +
                    "<td>Jane Doe</td>" +
                    "<td>Doe Jon</td>"  +
                    "<td>Doe Jane</td>";
    expect(displayer.createColumnsWith(attendees)).toEqual(columns);
  });

  it("generates rows from an array of sorted attendees", function() {
    var sorted = [["Jon Doe", "Jane Doe", "Doe Jon", "Doe Jane"], ["Number Five"]];
    var rows   = "<tr>"                  +
                     "<td>Jon Doe</td>"  +
                     "<td>Jane Doe</td>" +
                     "<td>Doe Jon</td>"  +
                     "<td>Doe Jane</td>" +
                 "</tr>"                 +
                 "<tr>"                  +
                     "<td>Number Five</td>" +
                     "<td></td>"         +
                     "<td></td>"         +
                     "<td></td>"         +
                 "</tr>";
    expect(displayer.createRowsWith(sorted)).toEqual(rows);
  });

  it("injects the attendees in a table", function() {
    createTBody();

    var sorted = [["Jon Doe", "Jane Doe", "Doe Jon", "Doe Jane"], ["Number Five"]];
    displayer.injectDataInTable("results", sorted);
    expect(tbody.querySelectorAll("tr").length).toEqual(2);

    removeTBody();
  });
});
