var tree = "JSONtrees/familyVisaPet.json";
var levels = 9;
treeHeight = 700;


function fillModal(id) {
  switch(id) {
    case "popupFamilyVisa":
     $("#modalTitle").text("Family Based Visa");
     $("#modalBody").html(`<p>[Insert more info regarding family-based visas here.]</p>
     `);
      break;
    case "popupLab":
      $("#modalTitle").text("AABB-Accredited Laboratories");
     $("#modalBody").html(`<p>DNA collection must be completed at a laboratory accredited by the AABB. For a list of AABB-accredited laboratories, click here: <a href ="https://www.aabb.org/standards-accreditation/accreditation/accredited-facilities/aabb-accredited-relationship-testing-facilities" targer = "_blank">www.aabb.org</a></p>
     `);
      break;
    case "popupLabProcess":
      $("#modalTitle").text("Lab Collection Process");
      $("#modalBody").html(`<p> [Insert more information regarding collection process at AABB-accredited lab. Including requirements for postage, etc.]</p>
      `);
      break;
    case "popupDNACollection":
      $("#modalTitle").text("DNA Collection Abroad");
      $("#modalBody").html(`<p>The visa applicant will need to have their DNA collected at a U.S. Embassy or Consulate Abroad.</p> <a href="./familyVisaApp.html" target = "_blank">More information on applicant collection process</a>`);
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