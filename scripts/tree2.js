var tree = "JSONtrees/tree2.json";
var levels = 9; 
treeHeight = 700;

function fillModal(id) {
  switch(id) {
    case "popupFIHS":
     $("#modalTitle").text("FBI Identity History Summary");
     $("#modalBody").html(`<p> An FBI Identity History Summary is a “listing of certain information taken from fingerprint submissions kept by the FBI.” It includes information related to arrests and sometimes immigration status. For more information on FBI Identity History Summaries including how to request one and how to challenge one, please go to <a href='https://www.fbi.gov/services/cjis/identity-history-summary-checks' target="_blank">https://www.fbi.gov/services/cjis/identity-history-summary-checks</a>.</p>
     `);
      break;
    case "popupExemptions":
      $("#modalTitle").text("Exemptions");
     $("#modalBody").html(`<p>The following detainee populations are exempt from DNA collection when detained by Customs and Border Patrol:</p>
      <ul>
      <li>Individuals lawfully in or being processed for lawful admission into the United States;</li>
      <li>Individuals held at a point of entry during consideration of admissibility, but not subject to further detention or proceedings;</li>
      <li>Individuals who withdraw their application for admission who are not subject to further law enforcement action;</li>
      <li>Individuals who are Visa Waiver Program refusals who are not subject to further enforcement action; </li>
      <li>Individuals held in connection with maritime interdiction, and applicants for admission denied landing rights at berth;</li>
      <li>Any individual transferred from CBP custody to the custody of another federal agency (with the exception of ICE);</li>
      <li>Individuals who suffer from a severe physical or cognitive handicap including
        <ul>
        <li>Mental impairment; </li>
        <li>Subjects being immediately transported for medical treatment; or</li>
        <li>Subjects appearing to be under the influence of narcotics in a manner that poses a risk to officer safety.</li>
        </ul>
      </li>
    </ul>
     `);
      break;
    case "popupProfile":
      $("#modalTitle").text("DNA Profile");
      $("#modalBody").html(`<p>  DNA Profile .................................................................................................................................................................................................................</p>
      `);
      break;
    case "popupNDIS":
      $("#modalTitle").text("DNA stored in NDIS");
      $("#modalBody").html(`<p>Migrant DNA collected by CBP and processed through an FBI Laboratory will be stored in the National DNA Index System (“NDIS”), a national inventory of DNA profiles contributed by federal, state, and local forensic laboratories. The NDIS contains the data of convicted offenders, arrestees, detainees, missing persons, relatives of missing persons and more, as submitted by accredited labs around the United States. It is part of the Combined DNA Index System (“CODIS”), a tool utilized by law enforcement agencies to link individuals to crimes based on DNA evidence, identify unidentified human remains and search for missing persons. </p><br>
      <h6><b>What information is stored in CODIS?</b></h6>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the immigration context, CODIS stores only the following information:</p>
      <ol>
      <li>The DNA profile; </li>
      <li>The Agency Identifier (for the agency that submitted the DNA profile);</li>
      <li>The Specimen Identification Number (does not correlate to other personal information like social security numbers or A-Numbers);</li>
      <li>The DNA laboratory personnel associated with the DNA profile analysis.</li>
      </ol><br>
      <h6><b>Who has access to the information stored in CODIS?</b></h6>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Federal, state and local law enforcement agencies have access to CODIS. CODIS may also be accessed in judicial proceedings, such as _______. Defendants in criminal cases may access the samples and analyses performed in connection with their case, but they may not access other data contained in CODIS.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Additionally, CODIS data may be accessed by criminal justice agencies for a population statistics database, for identification research and protocol development purposes, or for quality control.</p><br>
      <h6><b>How secure is CODIS?</b></h6>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;The computer terminals containing the CODIS are located in a physically secure location and access is restricted to only authorized individuals. </p><br>
      <h6><b>Can I get my information removed from CODIS?</b></h6>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Good question! I’m working on an answer… There’s some indication that you can get an expungement, but it is unclear if this applies to immigrant detainees.</p>
      `);
      break;
    default:
      alert("something went wrong");
      break;
  }
}