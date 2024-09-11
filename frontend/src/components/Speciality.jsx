import React from 'react';
export default function SpecialtySelection(props) {
    const specialities = [
        'GENERAL_PHYSICIAN',
        'ALLERGY_AND_IMMUNOLOGY',
        'ANESTHESIOLOGY',
        'DERMATOLOGY',
        'DIAGNOSTIC_RADIOLOGY',
        'EMERGENCY_MEDICINE',
        'FAMILY_MEDICINE',
        'INTERNAL_MEDICINE',
        'MEDICAL_GENETICS',
        'NEUROLOGY',
        'NUCLEAR_MEDICINE',
        'GYNECOLOGY',
        'OPHTHALMOLOGY',
        'PATHOLOGY',
        'PEDIATRICS',
        'PHYSICAL_MEDICINE',
        'PREVENTIVE_MEDICINE',
        'PSYCHIATRY',
        'RADIATION_ONCOLOGY',
        'SURGERY',
        'UROLOGY',
        'CARDIOLOGIST',
        'DERMATOLOGIST',
        'NEUROLOGIST',
        'PEDIATRICIAN',
        'ORTHOPEDIC'
    ];

    const radiusRanges = [
        '10 km', '20 km', '30 km', '40 km', '50 km',
        '60 km', '70 km', '80 km', '90 km', '100 km'
    ];

    const handleSelection = (speciality) => {
        props.setSelectedSpeciality(speciality);
    };

    const handleSelect = (range) => {
        // Remove ' km' from the range value before setting it in state
        const rangeValue = range.replace(' km', '');
        props.setSelectedRange(rangeValue);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 mb-4">
                    <h3 className="mb-4 text-center">Select a Specialty</h3>
                    <div className="row g-2">
                        {specialities.map((speciality, index) => (
                            <div key={index} className="col-6 col-md-4 col-lg-3">
                                <button
                                    type="button"
                                    className={`btn w-100 py-3 ${props.selectedSpeciality === speciality ? 'btn-primary' : 'btn-outline-secondary'}`}
                                    onClick={() => handleSelection(speciality)}
                                >
                                    {speciality.replace(/_/g, ' ')}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-12">
                    <h3 className="mb-4 text-center">Select Distance</h3>
                    <div className="row g-2">
                        {radiusRanges.map((range, index) => (
                            <div key={index} className="col-6 col-md-3 col-lg-2">
                                <button
                                    type="button"
                                    className={`btn w-100 py-3 ${props.selectedRange === range.replace(' km', '') ? 'btn-primary' : 'btn-outline-secondary'}`}
                                    onClick={() => handleSelect(range)}
                                >
                                    {range}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
