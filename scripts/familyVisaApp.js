var tree = "JSONtrees/familyVisaApp.json";
var levels = 8;
treeHeight = 700;


function fillModal(id) {
  switch(id) {
    case "popupBegin":
     $("#modalTitle").text("Starting the Process");
     $("#modalBody").html(`<p>Individuals seeking a family-based visa should work closely with their U.S. based family members to complete the DNA testing process. U.S. based family members are required to start the DNA collection process, the process cannot be initiated by individuals abroad. For more information on the role of U.S. based family members, click here [link to Family Based Visas (Petitioners)].
     Please note that DNA collection and testing is only a portion of the application process for family-based visas. Evidence of a confirmed relationship does not guarantee issuance of a visa. For more information on the entire application process, click here. [Link to be added.]</p>
     `);
      break;
    case "popupEmbassy":
      $("#modalTitle").text("U.S. Embassy and Consulate");
     $("#modalBody").html(`<p>DNA collection should occur at the U.S. Embassy or Consulate where the visa application is pending. Find the nearest U.S. Embassy or Consulate here: <a href= "https://www.usembassy.gov/" target = "_blank">https://www.usembassy.gov</a></p>
     `);
      break;
    case "popupFees":
      $("#modalTitle").text("Fees");
      $("#modalBody").html(`<p> [More info on scheduling appointments and the fee table.]</p>
      `);
      break;
    case "popupSample":
      $("#modalTitle").text("Sample Collection Process (Abroad)");
      $("#modalBody").html(`<p>In order to have a DNA sample collected abroad, it is important to make sure that applicants come prepared to their scheduled collection appointment. Applicants must bring with them the following records:</p>
      <ul>
      <li>Their passport</li>
      <li>A photo of themselves</li>
      <li>A receipt showing payment of fees associated with DNA collection</li>
      </ul>
      <p>A designated physician and/or medical technician will collect the sample and securely send it back to the AABB lab in the United States.<br><br>
      If an applicant is a child, they must be accompanied by a parent or legal guardian. If neither parent is present, the guardian must present a Power of Attorney document from the parent residing in the United States.
       </p>
      `);
      break;

      case "popup5":
      $("#modalTitle").text("Family Member Resources");
      $("#modalBody").html(`<p><a href="https://www.law.cornell.edu/uscode/text/8/1325" target="_blank">§1325</a> | Improper Entry, civil offense &amp; misdemeanor</p>
      <p><a href="https://www.law.cornell.edu/uscode/text/8/1326" target="_blank">§1326</a> | Reentry of removed aliens; aggravated felony</p>
      <p><a href="https://www.law.cornell.edu/uscode/text/8/1357" target="_blank">§1357</a> | Immigration Powers: Immigration authorities have broad power to search persons and
      property</p>
      <p><a href="https://www.law.cornell.edu/uscode/text/8/1182" target="_blank">§1182</a> | Conditions for inadmissibility</p>
      <p><a href="https://www.law.cornell.edu/uscode/text/8/1225" target="_blank">§1225</a> | Inspection by immigration officers; expedited removal of inadmissible arriving aliens;
      referral for hearing</p>
      <p><a href="https://www.law.cornell.edu/uscode/text/8/1227" target="_blank">§1227</a> | Classes of deportable aliens</p>
       <a href="https://www.law.cornell.edu/uscode/text/8/1229" target="_blank">8 USC §1229</a> | Initiation of removal proceedings</p>`);
      break;

    default:
      alert("something went wrong");
      break;
  }
}