        // Simulated data for prescription list (for demonstration purposes)
        const prescriptions = [
            { medication: 'Medicine A', dosage: '10mg', frequency: 'Twice daily', duration: '7 days', notes: 'Take with food' },
            { medication: 'Medicine B', dosage: '5mg', frequency: 'Once daily', duration: '14 days', notes: 'Avoid alcohol' }
        ];

        // Function to display prescriptions
        function displayPrescriptions() {
            const prescriptionList = document.getElementById('prescriptionList');
            prescriptionList.innerHTML = ''; // Clear existing list

            prescriptions.forEach(prescription => {
                const prescriptionItem = document.createElement('div');
                prescriptionItem.classList.add('prescription');
                prescriptionItem.innerHTML = `
                    <strong>Medication:</strong> ${prescription.medication}<br>
                    <strong>Dosage:</strong> ${prescription.dosage}<br>
                    <strong>Frequency:</strong> ${prescription.frequency}<br>
                    <strong>Duration:</strong> ${prescription.duration}<br>
                    <strong>Notes:</strong> ${prescription.notes}
                `;
              
                prescriptionList.appendChild(prescriptionItem);
            });
        }

        // Add event listener to form submission
        document.getElementById('createPrescriptionForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get form values
            const medicationName = document.getElementById('medicationName').value;
            const dosage = document.getElementById('dosage').value;
            const frequency = document.getElementById('frequency').value;
            const duration = document.getElementById('duration').value;
            const notes = document.getElementById('notes').value;

            // Add new prescription to the list
            prescriptions.push({ medication: medicationName, dosage, frequency, duration, notes });

            // Display updated prescription list
            displayPrescriptions();

            // Reset form fields
            document.getElementById('createPrescriptionForm').reset();
        });

        // Initial display of prescriptions
        displayPrescriptions();
   