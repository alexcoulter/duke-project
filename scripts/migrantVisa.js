var tree = "JSONtrees/migrantVisa.json";
var levels = 8; 
treeHeight = 700;

function fillModal(id) {
 
  switch(id) {
    case "popupLab":
     $("#modalTitle").text("AABB Accredited Lab");
     $("#modalBody").html(`<p>1914 translation by H. Rackham
     "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure
     </p>
     `);
      break;
    case "popupWitness":
      $("#modalTitle").text("Cleared American Witness");
     $("#modalBody").html(`<p>Once DNA is collected by USCIS, the data is entered into the FBI’s CODIS system (the
      Combined DNA Index System), which is traditionally used as a tool for linking violent crimes.
      CODIS is intended to enable federal, state and local forensic laboratories to exchange and
      compare DNA profiles electronically, linking serial violent crimes to each other and to known
      offenders. The database is also used to help identify missing and unidentified individuals. Given
      the nature of the CODIS system, the entry of migrant DNA into the system may be problematic.
      
      Essentially, non-violent criminals are being surveilled along side violent criminals, simply due to
      their status as a migrant.</p><br>
      <p>Migrants who are concerned about the implications of having their DNA inputted into the
      CODIS system can utilize the resources listed below if they have questions or concerns regarding
      this use of their personal biometric data.</p><br>
      <ol>
      <li><a href="./index.html" target = "_blank">The Colibrí Center</a> - facilitates family reunification and the identification of unidentified
      human remains</li>
      <li><a href="./index.html" target = "_blank">Justice for Our Neighbors</a> - a non-profit that seeks to aid asylum seekers in their legal
      disputes with the USCIS</li>
      <li><a href="./index.html" target = "_blank">USCIS Hotline</a> - a resource made available by the United States Citizenship and
      Immigration Service to assist migrants with this process</li>
     `);
      break;
    case "popupSatis":
      $("#modalTitle").text("99.5% = satisfactory");
      $("#modalBody").html(`User's Path:${recap}<br><p>   1914 translation by H. Rackham
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure
     </p>
      `);
      break;
    case "popup4":
      $("#modalTitle").text("Potential Factors");
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