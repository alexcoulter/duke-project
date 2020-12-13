var tree = "JSONtrees/familyBorder.json";
var levels = 11; 
treeHeight = 700;

function fillModal(id) {
  switch(id) {
    case "popupFraud":
     $("#modalTitle").text("Fraudulent Relationships");
     $("#modalBody").html(`<p> Not all families are subject to family verification at the border. In theory, only families that ICE considers potentially fraudulent are subject to DNA tests. However, the criteria by which ICE determines what families may be “fraudulent” is unclear and it appears that agents rely solely on their “law enforcement expertise” to make these decisions. Therefore, all parents crossing the border should be aware of the potential for them to be subject to increased scrutiny and potential collection of their DNA. </p>
     `);
      break;
    case "popupPrivacy":
      $("#modalTitle").text("Privacy Statements");
     $("#modalBody").html(`<p>After a family is identified as potentially fraudulent, the adult member of the family unit “will be provided a privacy statement containing the purpose of the Rapid DNA testing, the legal authority under which DNA is collected, that information related to the collection of the DNA (e.g. the existence of a positive or negative match) may be shared according to federal law and policy, and that submitting to Rapid DNA testing is voluntary.” </p>
     `);
      break;
    case "popupRefusing":
      $("#modalTitle").text("Refusing to consent to collection");
      $("#modalBody").html(`<p>While an individual may refuse to submit to DNA collection and verification, there are several important considerations to be aware of:</p>
      <ul>
      <li>Although verification through genetic testing is portion of ICE’s investigations regarding potentially fraudulent relationships, it is not determinative. Refusing to submit to DNA collection is not automatically disqualifying, but ICE makes clear that the decision will weigh against an individual seeking to prove the existence of a familial relationship.</li>
      <li>If ICE opens an investigation into a potentially fraudulent family unit, they may be able to secure a warrant requiring an individual to submit to DNA collection, even if that individual refused to consent during the initial verification process. </li>
      </ul>
      </p>
      `);
      break;

    case "popupDNACollection":
      $("#modalTitle").text("DNA Collection Process");
      $("#modalBody").html(`<p>For the purposes of family verification at the border, ICE (through a third-party vendor) conducts Rapid DNA analysis. Authorized testers collect DNA samples from each family member on a cheek swab. Each swab contains an RFID tracking chip that ensures “that the DNA sample is attributed to the correct person.” Samples are later destroyed during the Rapid DNA analysis. </p>
      `);
      break;

      case "popupRapidTest":
      $("#modalTitle").text("Rapid DNA Test");
      $("#modalBody").html(`<p>Once DNA samples are collected, they are inserted into “an automated, integrated desktop unit” that produces a “DNA profile” identifying “a set of STR loci to verify parent-child relationships.” The resulting DNA profiles are compared to determine if there is a genealogical relationship.</p>
      `);
      break;

      case "popupInconclusive":
        $("#modalTitle").text("Inconclusive Results");
        $("#modalBody").html(`<p>In the event that one of the samples produces an “inconclusive” DNA profile that cannot be effectively compared to the other, a “trained technician” will “analyze the DNA profiles from the results of the testing and determine the likelihood of a parent-child relationship.” Alternatively, at their discretion, ICE personnel “may collect and run a new sample through the system.” </p>
        `);
      break;

      case "popupContesting":
        $("#modalTitle").text("Contesting the Results of a Rapid DNA Test");
        $("#modalBody").html(`<p>[The guidance says you can. Unclear how that would actually occur.]</p>
        `);
      break;

      case "popupSharepoint":
        $("#modalTitle").text("SharePoint Log");
        $("#modalBody").html(`<p>SharePoint log entries for migrants contain personally identifiable information, including names and dates of birth for both parent and child, alien registration numbers, DNA test results and the barcode number that corresponds to the DNA sample. SharePoint files are accessible by ICE officials on a “need to know” basis. DNA test results are retained for 75 years. </p>
        `);
      break;

      case "popupInvestigation":
        $("#modalTitle").text("Investigative Case Management System ");
        $("#modalBody").html(`<p>In the event that ICE “chooses to investigate or prosecute an individual, that information will be stored in” the Investigative Case Management system. Information stored in ICM is retained indefinitely (for at least 20 years following the closure of the case) and can be shared with outside agencies. </p>
        `);
      break;
      

    default:
      alert("something went wrong");
      break;
  }
}